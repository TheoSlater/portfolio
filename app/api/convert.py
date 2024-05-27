
from pytube import YouTube
from moviepy.editor import VideoFileClip
import os

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

def download_and_convert(url):
    try:
        yt = YouTube(url)
        mp4_stream = yt.streams.filter(file_extension='mp4').first()

        if mp4_stream:
            mp4_file_path = mp4_stream.download('.')
            return convert_to_mp3(mp4_file_path)
        else:
            return {'error': 'MP4 stream not found'}, 400

    except Exception as e:
        return {'error': str(e)}, 500

def convert_to_mp3(video_file_path):
    try:
        video = VideoFileClip(video_file_path)
        audio = video.audio
        audio_file_path = video_file_path.replace('.mp4', '.mp3')
        audio.write_audiofile(audio_file_path, codec='mp3', fps=44100)
        video.close()
        os.remove(video_file_path)
        return {'message': 'MP3 conversion completed successfully', 'audio_file_path': audio_file_path}
    except Exception as e:
        return {'error': str(e)}, 500

@app.route('/api/convert', methods=['POST'])
def convert():
    data = request.get_json()
    url = data.get('url')
    if not url:
        return jsonify({'error': 'URL is required'}), 400
    response = download_and_convert(url)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
