export type GenericResponseType<T> = {
	codigo: number;
	mensaje: string;
	data: T;
};
