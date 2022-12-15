export function Title(title){
    document.head.innerHTML += `<link rel="stylesheet" href="app/components/Title/Title.css">`;
    const $h1 = document.createElement("h1")
    $h1.className = "title__main"
    $h1.innerHTML = title
    return $h1
}