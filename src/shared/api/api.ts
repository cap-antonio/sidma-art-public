import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react'
import axios from 'axios'
import { TBloggerPostsResponse, TGoogleBlogFeedResponse, TPost } from './types'
import { prepareBloggerResponseToPost } from './helpers'

const googleApiKeyBlogger = 'AIzaSyDfoaKPFJF8XbjLBQPVcWWeRiftgRmNjss'
const googleBloggerId = '3205195252165398229'

export const baseApi = createApi({
  baseQuery: fakeBaseQuery(),
  reducerPath: 'baseApi',
  endpoints: (builder) => ({
    fetchFeed: builder.query<Array<TPost>, void>({
      async queryFn() {
        const { data: blogResp } = await axios.get<TGoogleBlogFeedResponse>(
          `https://www.googleapis.com/blogger/v3/blogs/${googleBloggerId}/posts?key=${googleApiKeyBlogger}`,
        )

        // const { data: blogResp } = await axios.get(
        //   // 'https://www.instagram.com/graphql/query?query_id=17888483320059182&variables={%22id%22:%22240462150%22,%22first%22:%201,%22after%22:null}',
        // )

        const blogPosts = blogResp.items.map((c) =>
          prepareBloggerResponseToPost(c),
        )

        return { data: [...blogPosts, ...blogPosts, ...blogPosts] }
      },
    }),
    fetchPost: builder.query<TPost, string>({
      async queryFn(id) {
        const { data: blogResp } = await axios.get<TBloggerPostsResponse>(
          `https://www.googleapis.com/blogger/v3/blogs/${googleBloggerId}/posts/${id}?key=${googleApiKeyBlogger}`,
        )

        return { data: prepareBloggerResponseToPost(blogResp) }
      },
    }),
  }),
})

export const { useFetchFeedQuery, useFetchPostQuery } = baseApi
