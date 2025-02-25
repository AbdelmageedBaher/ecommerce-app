
import { createRoot } from 'react-dom/client'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'flowbite/dist/flowbite.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import App from './App.jsx'
import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
import UserTokenProvider from './components/Context/UserToken.jsx';
import { Toaster } from 'react-hot-toast';
import NumCartItemProvider from './components/Context/NumCartItems.jsx';




const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
    <NumCartItemProvider>
    <QueryClientProvider client={queryClient}>
    <UserTokenProvider>
    <Toaster position="top-right" reverseOrder={true}/>
    <App/> 
    </UserTokenProvider>
    </QueryClientProvider>
    </NumCartItemProvider>
)
