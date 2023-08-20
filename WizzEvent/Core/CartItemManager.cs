using DataAccess.CRUD;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class CartItemManager
    {
        public void CreateCartItem(int IdCart, int IdSector, int Quantity)
        {
            var crud = new CartItemCrudFactory();
            crud.Create(IdCart, IdSector, Quantity);
        }
    }
}
