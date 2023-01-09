import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    defineField({
      name: "title",
      title: "Title",
      description: "social media platform",
      type: "string",
    }),
    defineField({
      name: "url",
      title: "Url",
      type: "url",

    }),



  ],

 
})
