import React from 'react'
import { motion, cubicBezier } from 'framer-motion'

export default function JNSignatureMotion({ twClasses }: { twClasses: string }) {
  return (
    <motion.svg viewBox='0 0 68.499 25.52' xmlns='http://www.w3.org/2000/svg' className={twClasses}>
      <motion.path
        id='JNSVG'
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{
          delay: 1.1,
          duration: 3.88,
          ease: cubicBezier(0.38, 0.03, 0.34, 0.98),
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 15,
        }}
        strokeWidth={1.25}
        strokeDasharray='0 1'
        fill='currentFill'
        d='M4.47,10.8a1.732,1.732,0,0,1,.288.358,3.949,3.949,0,0,1,.392,2.5,3.614,3.614,0,0,1-1.091,2,8.569,8.569,0,0,1-2.614,1.812,6.4,6.4,0,0,1,1.351.014A18.355,18.355,0,0,1,7.9,18.808a37.73,37.73,0,0,1,6.442,3.442c1,.649,1.975,1.331,2.958,2l1.135.731.064-.068s-.625-.686-.866-1.027a56.017,56.017,0,0,1-5.5-9.222A71.693,71.693,0,0,1,8.085,4.6a37.385,37.385,0,0,0-3.7-1.957c1.088.543,7.582,3.622,7.582,3.622l-3.76-1.7A58.212,58.212,0,0,0,11.1,12.219l.959-.669A31.9,31.9,0,0,0,13.5,15.027a9.137,9.137,0,0,0,1.75,2.6,1.267,1.267,0,0,0,1.664.154A1.324,1.324,0,0,0,17.5,16.7a4.479,4.479,0,0,0-.118-1.4,8.7,8.7,0,0,0-.229-.845c-.387-1.087-1.3-3.206-1.3-3.206s1.878,4.248,1.963,4.414c.286.558.549,1.128.878,1.663l1.008-1.288L17.1,10.465l.052-.016a18.578,18.578,0,0,0,.822,1.925c.6,1.189,1.231,2.519,1.767,3.739.126.288-.733.366-.733.366a10,10,0,0,1,4.761.477l.957.34.042-.026s-1.019-2.061-1.641-3.257c-.412-.792-1.492-2.807-1.492-2.807l-.171-.392a1.2,1.2,0,0,1-.384.126c-.8.145-1.368-.308-1.2-1.134A1.2,1.2,0,0,1,20.8,8.9a1.444,1.444,0,0,1,.438,0,.962.962,0,0,1,.7,1.512,1.061,1.061,0,0,1-.41.359l-.073.086S23.888,15.34,24.205,16s.552-.714.411-1.4l-.183-.753a3.059,3.059,0,0,1-.228-1.071,2.27,2.27,0,0,1,.487-1.419c.394-.439.741-.323,1.121,0a7.848,7.848,0,0,1,1.49,1.709,11.049,11.049,0,0,1,1.015,2.164,3.924,3.924,0,0,1,.278,1.451,1.111,1.111,0,0,1-.541,1A1.026,1.026,0,0,1,27,17.51a6.527,6.527,0,0,1-1.83-1.98,6.8,6.8,0,0,1-.688-1.5s1.228,2.993,2.248,3.416a4.927,4.927,0,0,0,1.835.315,3.794,3.794,0,0,0,1.124-.173c.662-.2,1.485-.471,1.892-.632a26.893,26.893,0,0,0,2.815-1.385,12.346,12.346,0,0,0,2.536-2.4l.09.069a12.319,12.319,0,0,1-2.536,2.4,26.8,26.8,0,0,1-2.815,1.385c-.5.2-2.4.743-2.4.743l0,.019a31.425,31.425,0,0,1,3.42.443c.934.18,1.868.373,2.781.636a26.09,26.09,0,0,1,5.259,2.07,37.318,37.318,0,0,1,3.84,2.327l.968.666.03-.024s-1.454-2.777-2.509-4.859c-.6-1.183-2.032-3.923-2.979-5.584-.493-.865-5.877-10.481-5.877-10.481l.05-.026c.95,1.084,6.585,7.6,7.57,8.737,1.066,1.228,2.186,2.408,3.288,3.6,1.615,1.752,3.312,3.42,5,5.1.905.9,2.722,2.962,2.722,2.962l.086-.07L41.621,1.045l.1-.028L48.95,15.258l.077-.056.167-2.257.042-.028a31.83,31.83,0,0,0,1.588,3.708,6.75,6.75,0,0,0,1.052,1.395,1,1,0,0,0,1.642-.12,3.7,3.7,0,0,0,.535-2.3,1.332,1.332,0,0,0-.109-.566,25.92,25.92,0,0,0-1.33-3.187c-.1-.211-.281-.66-.281-.66s2.014,4.531,2.089,4.684c.242.488.507.966.749,1.454.081.165.251.493.251.493l1.045-.452.039-.021a7.874,7.874,0,0,0-.5-1.455c-.47-1.005-2.214-4.277-2.214-4.277a39.347,39.347,0,0,0,4.228,4.527,9.82,9.82,0,0,0,2.309,1.236l.044-.024s-.9-2.051-1.34-2.824c-.681-1.2-1.663-3.37-1.663-3.37l.036-.022.837,1.542s.784.1,1.038-1.274a1.321,1.321,0,0,1,.907-.967,1.551,1.551,0,0,1,1.089.086,3.013,3.013,0,0,1,.97,1.1,8.661,8.661,0,0,1-.853-2.255h0a8.661,8.661,0,0,0,.853,2.255,3.013,3.013,0,0,0-.97-1.1,1.551,1.551,0,0,0-1.089-.086,1.516,1.516,0,0,0-.907.967,1.816,1.816,0,0,0,.55,1.931,5.388,5.388,0,0,0,1.288,1.108c.137.081.469.258.607.321v.012s-.152.158-.364.371a1.075,1.075,0,0,0-.235,1.365A3.634,3.634,0,0,0,62.3,17.721a1.688,1.688,0,0,0,1.424.253,1.408,1.408,0,0,0,1-1.4,4.327,4.327,0,0,0-.314-1.212c-.09-.209-.217-.449-.331-.7a9.652,9.652,0,0,1,.586,1.306,1.83,1.83,0,0,1,.021,1.318l.679.425A8.128,8.128,0,0,0,66.756,15.5,8.527,8.527,0,0,0,67.4,13.47a35.175,35.175,0,0,1-4.259-2.281h0A35.175,35.175,0,0,0,67.4,13.47a8.527,8.527,0,0,1-.639,2.031,8.128,8.128,0,0,1-1.385,2.207l.131.077s.386-.08.468-.081a6.429,6.429,0,0,1,1.485.064c.729.124,1.5.317,1.5.317l.06-.073a8.116,8.116,0,0,0-1.26-1.791'
        transform='translate(-1.254 -0.27)'
      />
    </motion.svg>
  )
}

export const JNLogo = ({ twClasses }: { twClasses: string }) => (
  <svg
    className={'mr-3 h-6 fill-black dark:fill-white sm:h-9 ' + twClasses}
    viewBox='0 0 367.8337 378.6328'
    xmlns='http://www.w3.org/2000/svg'
  >
    <g>
      <path
        fill='currentFill'
        d='M359.8444,50.6662C344.1928,29,323.1116,0,322.4039,0c-1.13,0-50.831,0-50.831,0l47.0637,67.3564a17.2783,17.2783,0,0,1,.6367,19.2183l-9.9365,16.2667L240.9871,0H222.5153c-35.6609,0-58.44,5.6807-78.8461,28.7932-6.5508,7.42-8.3042,11.573-2.58,20.02,32.1092,47.3888,63.3648,95.2186,94.845,142.9312,3.6385,5.5147,8.4947,11.7953,10.9138,18.1061,5.7736,15.0613,6.0566,34.3769,3.7586,51.3159l31.8033-45.026c7.6528-9.3741,7.505-16.7156.7973-26.5831-29.5972-43.541-58.3912-87.5008-87.1122-131.4893-3.7156-5.6909-10.37-15.8941-8.6688-17.6536,5.1118-5.288,15.0546-4.157,24.0987-2.1121,5.78,1.3069,9.0651,2.8388,11.6844,7.003,4.3349,6.8917,9.0176,13.617,13.5588,20.4094,21.8561,32.6916,43.64,65.42,65.691,98.0112,2.09,3.0884,5.095,12.0505,10.282,5.7879a10.79,10.79,0,0,0,.8406-1.2583L360.792,97.5787h0A40.4091,40.4091,0,0,0,359.8444,50.6662Z'
      />
      <path
        fill='currentFill'
        d='M212.6762,319.3187c16.16-24.6995,22.3166-55.0123,15.3384-83.6916a96.8374,96.8374,0,0,0-14.2971-32.744L111.3469,50.0279c-6.149-9.13-5.77-14.78,3.507-22.5293C126.7986,17.5214,149.6425,0,149.6425,0H62.14A68.7286,68.7286,0,0,0,7.018,27.6772L0,37.1006H43.7025c9.7609,0,15.2276,2.8377,20.0316,10.1912L178.8219,219.1386c20.2947,31.2835,11.2965,65.19-6.3848,86.9359-31.168-47.242-61.9542-94.1-93.0577-140.7974-3.788-5.6875-6.1584-9.7066-1.4666-10.9054,20.5835-5.2593,26.3975-11.7637,32.2659-24.3529l-83.7593-.2277c-12.0768,0-14.336,5.2566-8.5783,13.6794L173.87,378.6328Z'
      />
    </g>
  </svg>
)

export const SunIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z' />
  </svg>
)

export const MoonIcon = () => (
  <svg
    viewBox='0 0 24 24'
    fill='currentColor'
    className='h-6 w-6'
    aria-hidden='true'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      fillRule='evenodd'
      d='M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z'
      clipRule='evenodd'
    />
  </svg>
)

export const EmailIcon = ({ twClasses }: { twClasses: string }) => (
  <svg className={twClasses} fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z' />
  </svg>
)

export const GithubIcon = ({ twClasses }: { twClasses: string }) => (
  <svg className={twClasses} fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
)

export const LinkedInIcon = ({ twClasses }: { twClasses: string }) => (
  <svg className={twClasses} fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM8.557,18.889H5.38V9.356H8.557ZM6.969,7.941A1.762,1.762,0,1,1,8.716,6.179,1.755,1.755,0,0,1,6.969,7.941Zm12.71,10.948H16.505V14.343c0-2.988-3.181-2.736-3.181,0v4.546H10.146V9.356h3.178v1.737c1.385-2.568,6.355-2.758,6.355,2.459Z' />
  </svg>
)

export const ResumeIcon = ({ twClasses }: { twClasses: string }) => (
  <svg className={twClasses} fill='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
    <path d='M23.06,7.33A11.991,11.991,0,0,0,16.67.94a12.07,12.07,0,0,0-9.34,0A11.991,11.991,0,0,0,.94,7.33a12.07,12.07,0,0,0,0,9.34,11.991,11.991,0,0,0,6.39,6.39,12.07,12.07,0,0,0,9.34,0,11.991,11.991,0,0,0,6.39-6.39,12.07,12.07,0,0,0,0-9.34ZM11.46,4.97h5.12v.84H11.46Zm0,2.65h2.53v.83H11.46ZM9.92,12.9h6.01v.84H9.92Zm3.61,2.65v.83H7.49v-.83ZM4.83,5.99a1.605,1.605,0,1,1,3.21,0v.45a1.605,1.605,0,1,1-3.21,0Zm.95,2.43a1.968,1.968,0,0,0,.65.1,2.07,2.07,0,0,0,.66-.1A2.579,2.579,0,0,1,9.37,11.1H3.5A2.571,2.571,0,0,1,5.78,8.42ZM3.13,12.9h5.8v.84H3.13Zm0,2.65H6.49v.83H3.13Zm6.79,3.48H3.13v-.84H9.92Zm10.95,0H10.92v-.84h9.95Zm0-2.65H14.54v-.83h6.33Zm0-2.64H16.93V12.9h3.94Zm0-2.64H11.46v-.84h9.41Zm0-2.65H15.08V7.62h5.79Zm0-2.64H17.93V4.97h2.94Z' />
  </svg>
)
