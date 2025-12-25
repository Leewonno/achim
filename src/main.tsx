import ReactDOM from 'react-dom/client'
import router from './Router'
import { RouterProvider } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <TanStackDevtools plugins={[
      {
        name: 'TanStack Query',
        render: <ReactQueryDevtoolsPanel />,
        defaultOpen: true
      },
    ]} />
    <RouterProvider router={router}></RouterProvider>
  </QueryClientProvider>
)
