import 'dotenv/config'

import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { preVisitNoteWorkflow } from './medical_survey.config.js'

const result = await teamwork(preVisitNoteWorkflow)

console.log(solution(result))
