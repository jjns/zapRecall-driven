import './Card.css'

export default function Card({ children, contentColor, onClick }) {
  return (
    <button className={`card ${contentColor}`} onClick={onClick}>
      {children}
    </button>
  )
}