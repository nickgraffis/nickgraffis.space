export default function Tooltip({ show, color, textColor, title }) {
  return <>
    <div className={`${show ? '' : 'hidden'} flex justify-center -mt-14 ml-2 absolute`}>
      <div className={`absolute p-2 bg-${color} rounded-lg text-xs text-${textColor}`}>{title}</div>
      <div className={`absolute mt-6 bg-${color} h-3 w-3 transform rotate-45`}></div>
    </div>
  </>
}
