async function windowActions() {


async function meals(){
    const request = await fetch("/api/meals");
    const data = await request.json();

}
window.onload = windowActions;