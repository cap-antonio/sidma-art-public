import { FC } from 'react'

function removeDuplicates(nums: Array<number>): number {
  let idx = 0
  for (let i = 0; i < nums.length; i++) {
    if (i < nums.length - 1 && nums[i] === nums[i + 1]) {
      continue
    }

    nums[idx] = nums[i]
    idx++
  }

  return idx
}

export const MainPage: FC = () => {
  // longestPalindrome('babas')
  const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
  const k = removeDuplicates(nums)
  console.log(k, nums)
  // console.log(removeDuplicates([1, 1, 2]))
  return <>asdsad </>
}
