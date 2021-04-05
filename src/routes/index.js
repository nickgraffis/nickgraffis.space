import { mount, route } from 'navi'
import Home from "../pages/Home"
import About from "../pages/About"
import Blog from "../pages/Blog"
import Post from "../pages/Post"
import Login from "../pages/Login"

export const routes = mount({
  '/': route({
    title: 'Nick Graffis | Software Engineer',
    head: <>
      <meta name="description" content="A software engineer from Long Beach, Calif." />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <Home />,
  }),
  '/blog': route({
    title: 'Nick Graffis | Software Engineer',
    head: <>
      <meta name="description" content="A software engineer from Long Beach, Calif." />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <Blog />,
  }),
  '/login': route({
    title: 'Welcome back, Nick!',
    head: <>
      <meta name="description" content="Login to edit Nick Graffis' personal site." />
      <script>
        {/* ADD SCRIPTS HERE FOR ANALYTICS */}
      </script>
    </>,
    view: <Login />,
  })
})
