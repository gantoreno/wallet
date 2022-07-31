import { Loader } from "../ui"

type PageLoaderProps = {}

const PageLoader = ({}: PageLoaderProps) => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-white">
      <Loader />
    </div>
  )
}

export default PageLoader
