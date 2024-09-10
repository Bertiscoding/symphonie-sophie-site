import { fetchData } from "@/app/utils/fetchData"
import NavBar from "./NavBar";

const Navigation = async () => {
  const fetchContent = await fetchData()
  const navItems = fetchContent.map(el => {
    return {
      navText: el.page,
      navLink: el.slug,
      navDisplay: el.nav_item
    }
  })

  return ( <NavBar items={navItems}/> )
}

export default Navigation
