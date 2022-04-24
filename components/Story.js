function Story({ img, username }) {
  return (
    <div>
      <img
        src={'/451.png'}
        alt=""
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 ease-out hover:scale-110"
      />
      <p className="w-14 truncate text-center text-sm">{username}</p>
    </div>
  )
}

export default Story
