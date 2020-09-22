export default function randomId() {
	return Math.random().toString(36).substring(6, 15) + Math.random().toString(36).substring(6, 15);
}
