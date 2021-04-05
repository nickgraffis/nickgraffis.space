export default function Tooltip({ show, color, textColor, title, className }) {
  return <>
    <div className={`${show ? '' : 'hidden'} flex justify-center absolute ${className || '-mt-14 ml-2'}`}>
      <div className={`absolute p-2 bg-${color} rounded-lg text-xs text-${textColor}`}>{title}</div>
      <div className={`absolute mt-6 bg-${color} h-3 w-3 transform rotate-45`}></div>
    </div>
  </>
}
