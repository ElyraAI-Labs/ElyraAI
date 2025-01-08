import 'dotenv/config'

import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { productDescriptionWorkflow } from './ecommerce_product_description.config.js'

const result = await teamwork(productDescriptionWorkflow)

console.log(solution(result))
