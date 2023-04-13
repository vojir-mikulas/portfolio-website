

import Test from "@/common/components/FirebaseProvider/Test";
import Hero from "@/common/components/Hero/Hero";
import ProjectList from "@/common/components/ProjectList/ProjectList";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:container mx-auto">
      <Hero/>
        <ProjectList/>
    </main>
  )
}
