import 'dotenv/config'

import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { wrapUpTheNewsWorkflow } from './news_wrap_up.config.js'

const result = await teamwork(wrapUpTheNewsWorkflow)

console.log(solution(result))
