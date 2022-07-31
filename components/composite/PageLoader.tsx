import { Loader } from "../ui"

type PageLoaderProps = {}

const PageLoader = ({}: PageLoaderProps) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <Loader />
    </div>
  )
}

export default PageLoader
