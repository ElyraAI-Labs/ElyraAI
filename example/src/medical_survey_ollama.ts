import { ollama } from 'ElryaAi/providers/ollama'
import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { preVisitNoteWorkflow } from './medical_survey.config.js'

const result = await teamwork({
  ...preVisitNoteWorkflow,
  provider: ollama({
    model: 'llama3.1',
  }),
})

console.log(solution(result))
