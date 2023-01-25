import { css } from '@emotion/react'
import { SerializedStyles } from '@emotion/react'

import { ArrayCSSInterpolation } from '@emotion/serialize/types'

export enum BreakpointsEnum {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  xl = 'xl',
  xxl = 'xxl',
}

export type BreakpointsUnion = keyof typeof BreakpointsEnum

export const breakpoints = {
  [BreakpointsEnum.xxl]: {
    min: 1201,
    max: 5000,
  },
  [BreakpointsEnum.xl]: {
    max: 1200,
    min: 961,
  },
  [BreakpointsEnum.lg]: {
    max: 960,
    min: 769,
  },
  [BreakpointsEnum.md]: {
    max: 768,
    min: 481,
  },
  [BreakpointsEnum.sm]: {
    max: 480,
    min: 280,
  },
}

// const breakpointsOrdering: Array<BreakpointsUnion> = [
//   // ordering
//   BreakpointsEnum.sm,
//   BreakpointsEnum.md,
//   BreakpointsEnum.lg,
//   BreakpointsEnum.xl,
//   BreakpointsEnum.xxl,
// ];

// const compareCurrentBreakpoint = (a: BreakpointsUnion, b: BreakpointsUnion) =>
//   breakpointsOrdering.indexOf(a) === breakpointsOrdering.indexOf(b)
//     ? 'EQ'
//     : breakpointsOrdering.indexOf(a) > breakpointsOrdering.indexOf(b)
//     ? 'GT'
//     : 'LT';

// const getApproximateBreakpoint = (): Exclude<BreakpointsUnion, 'mobile'> => {
//   if (isMobileOnly) return BreakpointsEnum.xs;
//   else if (isTablet) return BreakpointsEnum.sm;
//   else return BreakpointsEnum.lg;
// };

// type CurrentWidth = number | null;
// const getCurrentBreakpoint = (
//   x: CurrentWidth = null,
// ): Exclude<BreakpointsUnion, 'mobile'> =>
//   x === null
//     ? getApproximateBreakpoint() // by default (for SSR also), you're free to change it
//     : x <= breakpoints.xxs.max
//     ? BreakpointsEnum.xxs
//     : x >= breakpoints.xs.min && x <= breakpoints.xs.max
//     ? BreakpointsEnum.xs
//     : x >= breakpoints.sm.min && x <= breakpoints.sm.max
//     ? BreakpointsEnum.sm
//     : x >= breakpoints.md.min && x <= breakpoints.md.max
//     ? BreakpointsEnum.md
//     : x >= breakpoints.lg.min && x <= breakpoints.lg.max
//     ? BreakpointsEnum.lg
//     : BreakpointsEnum.xl;

// // for using breakpoints inside components
// export const useBreakpoints = (): {
//   ccb: typeof compareCurrentBreakpoint
//   cb: Exclude<BreakpointsUnion, 'mobile'>
// } => {
//   return {
//     ccb: compareCurrentBreakpoint,
//     cb: getCurrentBreakpoint(process.browser ? document.body.clientWidth : 0),
//   };
// };

type Media = Record<
  BreakpointsUnion,
  (
    template: TemplateStringsArray,
    ...args: ArrayCSSInterpolation
  ) => SerializedStyles
>
// for using breakpoints in styled
export const media = (
  Object.keys(breakpoints) as Array<BreakpointsUnion>
).reduce((acc, current: BreakpointsUnion) => {
  acc[current] = (...args) =>
    current === BreakpointsEnum.sm
      ? css`
          @media (max-width: ${breakpoints[current].max}px) {
            ${css(...args)}
          }
        `
      : css`
          @media (min-width: ${breakpoints[current]
              .min}px) and (max-width: ${breakpoints[current].max}px) {
            ${css(...args)}
          }
        `

  return acc
}, {} as Media)
