using DataAccess.DAO;
using DataAccess.Mapper;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.CRUD
{
    public class CartItemCrudFactory : CrudFactory
    {
        CartItemMapper _mapper;

        public CartItemCrudFactory()
        {
            _dao = SqlDao.GetInstance();
            _mapper = new CartItemMapper();
        }

        public void Create(int IdCart, int IdSector, int Quantity)
        {
            var sqlOperation = _mapper.GetAddStatement(IdCart, IdSector, Quantity);

            _dao.ExecuteProcedure(sqlOperation);
        }

        public override void Create(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override void Delete(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            throw new NotImplementedException();
        }

        public override T RetrieveById<T>(BaseDTO dto)
        {
            throw new NotImplementedException();
        }

        public override void Update(BaseDTO dto)
        {
            throw new NotImplementedException();
        }
    }
}
