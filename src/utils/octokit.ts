"use server"

import { Octokit } from "octokit"

const octokit = new Octokit({
  auth: process.env["GITHUB_AUTH_TOKEN"]
})

export async function getGithubUser() {
  try {
    const result = await octokit.request("GET /user", {})
    return result.data;
  } catch (error: any) {
    if (typeof error.status != 'undefined') {
      console.error(`Error when fetching data from GitHub API: ${error.status} - ${error.response.data.message}`);
    }
    console.error(error);
  }
}