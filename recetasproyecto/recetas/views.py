import os
from django.shortcuts import render
from .forms import RecetaForm

def ingresar_receta(request):
    if request.method == 'POST':
        form = RecetaForm(request.POST)
        if form.is_valid():
            form.save()
    else:
        form = RecetaForm()

    # Construye la ruta de la plantilla de manera dinámica
    template_path = os.path.join('recetas', 'ingresar_receta.html')
    return render(request, template_path, {'form': form})
