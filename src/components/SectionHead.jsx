const SectionHead = ({sectionName}) => {
  return (
    <>
      <h3 className='w-fit rounded-md border bg-white px-2.5 py-0.5 mx-auto transition- all duration-300 border-transparent shadow-md dark:shadow-md dark:shadow-neutral-700 '>
      {sectionName}
    </h3>
    </>
  )
}

export default SectionHead