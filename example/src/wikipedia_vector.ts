import 'dotenv/config'

import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { wikipediaResearch } from './wikipedia_vector.config.js'

const result = await teamwork(wikipediaResearch)

console.log(solution(result))
