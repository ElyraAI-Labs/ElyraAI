import 'dotenv/config'

import { solution } from 'ElryaAi/solution'
import { teamwork } from 'ElryaAi/teamwork'

import { bookLibraryWorkflow } from './library_photo_to_website.config.js'

const result = await teamwork(bookLibraryWorkflow)

console.log(solution(result))
