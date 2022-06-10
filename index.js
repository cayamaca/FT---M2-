$("#loading").hide();

$("#boton").click(()=>{
    //alert("function");
    const lista = $('#lista')
    lista.empty();
    $("#loading").show();
    $.get('http://localhost:5000/amigos', (data)=>{
    for(let amigo of data){
        const li = document.createElement("li")
        li.innerText = amigo.name;
        lista.append(li);
    }   
    $("#loading").hide();
    });
});
$("#search").click(()=> {
    const id = $("#input").val();
    $("#input").val('');

    $.get("http://localhost:5000/amigos/" + id, (amigo)=>{
    $("#amigo").text(amigo.name)
}).fail(() => {
    $("#amigo").text("El amigo con el id ${id} no existe");

});
});
$("#delete").click(()=> {
    const id = $("#inputDelete").val();
    $("#inputDelete").val("");

    $.ajax({
    url: "http://localhost:5000/amigos/" + id,
    type: "DELETE",
    success:() => {
      $("#sucess").text("Se elimino correctamente al amigo con el id ${id}");

    },
});
});




