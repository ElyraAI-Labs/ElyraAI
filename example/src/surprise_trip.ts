import 'dotenv/config'

import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { researchTripWorkflow } from './surprise_trip.config.js'

const result = await teamwork(researchTripWorkflow)

console.log(solution(result))
