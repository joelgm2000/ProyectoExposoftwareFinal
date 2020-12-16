using System;
using Datos;
using Entity;
using System.Collections.Generic;
using System.Linq;

namespace Logica
{
    public class ItemsRubricaService
    {
        private readonly ExposoftwareContext _context;
        public ItemsRubricaService(ExposoftwareContext context)
        {
            _context = context;
        }

        public GuardarItemsRubricaResponse Guardar(ItemsRubrica item)
        {
            try
            {
                _context.ItemsRubricas.Add(item);
                _context.SaveChanges();
                return new GuardarItemsRubricaResponse(item);
            }
            catch (Exception e)
            {
                return new GuardarItemsRubricaResponse($"Error de la Aplicacion: {e.Message}");
            }
        }

        public List<ItemsRubrica> ConsultarTodos(string id)
        {
            List<ItemsRubrica> lista = new List<ItemsRubrica>();
            List<ItemsRubrica> items = _context.ItemsRubricas.ToList();
            foreach (var item in items)
            {
                if (item.IdRubrica == id)
                {
                    lista.Add(item);
                }
            }
            return lista;
        }

        public string Eliminar(string id)
        {
            try
            {
                var item = _context.ItemsRubricas.Find(id);
                if (item != null)
                {
                    _context.ItemsRubricas.Remove(item);
                    _context.SaveChanges();
                    return ($"El registro se ha eliminado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }
        public string Modificar(ItemsRubrica itemNueva)
        {
            try
            {
                var itemVieja = _context.ItemsRubricas.Find(itemNueva.IdRubrica);
                if (itemVieja != null)
                {
                    itemVieja.Descripcion = itemNueva.Descripcion;
                    _context.ItemsRubricas.Update(itemVieja);
                    _context.SaveChanges();
                    return ($"El registro se ha modificado satisfactoriamente.");
                }
                else
                {
                    return ($"Lo sentimos, {itemNueva.IdRubrica} no se encuentra registrada.");
                }
            }
            catch (Exception e)
            {

                return $"Error de la Aplicación: {e.Message}";
            }
        }

    }
    public class GuardarItemsRubricaResponse
    {
        public GuardarItemsRubricaResponse(ItemsRubrica item)
        {
            Error = false;
            ItemsRubrica = item;
        }
        public GuardarItemsRubricaResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public ItemsRubrica ItemsRubrica { get; set; }

    }
}