import 'dotenv/config'

import { httpTool } from '@ElryaAi/tools/http'
import { agent } from 'ElryaAi/agent'
import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'
import { logger } from 'ElryaAi/telemetry'
import { workflow } from 'ElryaAi/workflow'

const browser = agent({
  description: `
    You are skilled at browsing Web with specified URLs, 
    methods, params etc.
    You are using "httpTool" to get the data from the API and/or Web pages.
  `,
  tools: {
    httpTool,
  },
})

const wrapupRedactor = agent({
  description: `
    Your role is to check Github project details and check for latest issues.
  `,
})

const checkupGithubProject = workflow({
  team: { browser, wrapupRedactor },
  description: `
    Check the project details for "ElryaAi" using the following API URL:
    "https://api.github.com/repos/callstackincubator/ElryaAi".

    From the data received get the number of stars and the URL for the listing the issues.
    List last top 3 issues and the number of star gazers for the project.
  `,
  output: `
    Comprehensive markdown report for ElryaAi project:
    - Include top 3 new issues.
    - Include the actual number of star gazers.
  `,
  snapshot: logger,
})

const result = await teamwork(checkupGithubProject)

console.log(solution(result))
