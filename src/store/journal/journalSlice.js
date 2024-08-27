import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
	name: 'journal',
	initialState: {
		isSaving: false,
		messageSaved: '',
		notes: [],
		active: null,
		// active: {
		// 	id: 'ABC123',
		// 	title: '',
		// 	body: '',
		// 	date: 1234567,
		// 	imageUrls: [], // https://image1.jpg
		// },
	},
	reducers: {
		savingNewNote: (state) => {
			state.isSaving = true;
		},
		addNewEmptyNote: (state, action) => {
			state.notes.push(action.payload);
			state.isSaving = false;
		},
		setActiveNote: (state, action) => {
			state.active = action.payload;
			state.messageSaved = '';
		},
		setNotes: (state, action) => {
			state.notes = action.payload;
		},
		setSaving: (state) => {
			state.isSaving = true;
			state.messageSaved = '';
			//TODO: Mensaje de error
		},
		updateNote: (state, action) => {
			//payload: note
			state.isSaving = false;
			state.notes = state.notes.map((note) => {
				if (note.id === action.payload.id) {
					return action.payload;
				}
				return note;
			});

			// const index = state.notes.findIndex((note) => note.id === action.payload.id);
			// state.notes[index] = state.active;

			state.messageSaved = `Nota Actualizada`;
		},
		setPhotosToActiveNote: (state, action) => {
			state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
			state.isSaving = false;
		},
		clearNotesLogout: (state) => {
			state.isSaving = false;
			state.messageSaved = '';
			state.notes = [];
			state.active = null;
		},
		deleteNoteById: (state, action) => {
			state.active = null;
			state.notes = state.notes.filter((note) => note.id !== action.payload);
			state.messageSaved = `Nota Borrada`;
		},
	},
});

// Action creators are generated for each case reducer function
export const {
	addNewEmptyNote,
	clearNotesLogout,
	deleteNoteById,
	savingNewNote,
	setActiveNote,
	setNotes,
	setPhotosToActiveNote,
	setSaving,
	updateNote,
} = journalSlice.actions;
