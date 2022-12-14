import Link from 'next/link';
import { MainLayout } from '../components/layouts/MainLayout';

export default function HomePage() {
  return (
    <MainLayout>
      <div>
        <h1>Home page</h1>

        <h1 className={"title"}>
          Ir a <Link href="/about">About</Link>
        </h1>

        <p className={"description"}>
          Get started by editing{' '}
          <code className={"code"}>pages/index.jsx</code>
        </p>
      </div>
    </MainLayout>
  )
}
