"use server"

import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env["GITHUB_AUTH_TOKEN"]
})

export async function getGithubUser() {
  try {
    const result = await octokit.request("GET /user", {})
    return result.data;
  } catch (error) {
    if (typeof (error as any).status != 'undefined') {
      console.error(`Error when fetching data from GitHub API: ${(error as any).status} - ${(error as any).response.data.message}`);
    }
    console.error(error);
  }
}