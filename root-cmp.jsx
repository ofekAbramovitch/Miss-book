const { useState } = React

import { HomePage } from './pages/home.jsx'
import { AboutUs } from './pages/about-us.jsx'
import { BookIndex } from './pages/book-index.jsx'
import { AppHeader } from './cmps/app-header.jsx'

export function App() {
    const [page, setPage] = useState('book')

    function onSetPage(ev, page) {
        ev.preventDefault()
        setPage(page)
    }

    return <section className="main-layout app">
        <header className="app-header full main-layout">
            <AppHeader onSetPage={onSetPage} />
        </header>
        <main>
            {page === 'home' && <HomePage />}
            {page === 'about' && <AboutUs />}
            {page === 'book' && <BookIndex />}
        </main>
    </section>
}