import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { FirebaseAuth } from '../firebase/config';
import { login, logout } from '../store/auth';
import { useDispatch, useSelector } from 'react-redux';
import { startLoadingNotes } from '../store/journal';

export const useCheckAuth = () => {
	const { status } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) return dispatch(logout());

			// TODO: dispatch(login(user)); => No funciona

			const { uid, email, displayName, photoURL } = user;
			dispatch(login({ uid, email, displayName, photoURL }));

			dispatch(startLoadingNotes());
		});
	}, []);

	return { status };
};
