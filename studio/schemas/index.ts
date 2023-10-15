import {defineField, defineType} from 'sanity'
import blockContent from './blockContent'
import project from './project'
import about from './about'

export const schemaTypes = [project, blockContent, about]
