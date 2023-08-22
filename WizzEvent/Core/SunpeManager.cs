using DataAccess.CRUD;
using DTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core
{
    public class SunpeManager
    {
        public void PaySunpeTransaction(SunpeTransaction sunpeTransaction)
        {
            var crud = new SunpeCrudFactory();
            crud.Create(sunpeTransaction);
        }

        public SunpeTransaction RetrieveIdSunpe(string transactionId)
        {
            var crud = new SunpeCrudFactory();
            return crud.RetrieveIdSunpe<SunpeTransaction>(transactionId);
        }
    }
}
