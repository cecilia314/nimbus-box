import Header from '@/components/Header';
import MobileNavigation from '@/components/MobileNavigation';
import Sidebar from '@/components/Sidebar';
import { getCurrentUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';
import { Toaster } from '@/components/ui/sonner';
import React from 'react';

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) return redirect('/sign-in');

  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />

      <section className="flex h-full grow flex-col">
        <MobileNavigation {...currentUser} />
        <Header userId={currentUser.$id} accountId={currentUser.accountId} />
        <div className="main-content">{children}</div>
      </section>

      <Toaster closeButton />
    </main>
  );
};

export default Layout;
