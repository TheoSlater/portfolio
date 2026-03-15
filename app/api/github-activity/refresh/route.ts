import { refreshGithubContributionsCache } from "@/app/features/bento/server/github-contributions";
import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST() {
  try {
    const data = await refreshGithubContributionsCache();
    revalidatePath("/");
    return NextResponse.json({ data });
  } catch (error) {
    console.error("Failed to refresh Github contributions:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
