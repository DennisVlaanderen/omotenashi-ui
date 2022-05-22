import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import Dashboard from '../components/Dashboard';
import { GlobalMenuContext } from '../components/context/GlobalMenuContext';

const Home: NextPage = () => {
	return (
		<div>
				<Head>
					<title>Omotenashi Panel</title>
				</Head>
				<Dashboard>
					<main className="flex justify-center">
						<h1 className="text-3xl font-bold underline text-red-600">Home</h1>
					</main>
				</Dashboard>
		</div>
	);
};

export default Home;
