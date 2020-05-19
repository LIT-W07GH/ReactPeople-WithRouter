using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using Microsoft.EntityFrameworkCore;

namespace ReactWithBackend.Data
{
    public class PersonRepository
    {
        private readonly string _connectionString;

        public PersonRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Person> GetAll()
        {
            using (var context = new PeopleDataContext(_connectionString))
            {
                return context.People.ToList();
            }
        }

        public void Add(Person person)
        {
            using (var context = new PeopleDataContext(_connectionString))
            {
                context.People.Add(person);
                context.SaveChanges();
            }
        }

        public void Update(Person person)
        {
            using (var context = new PeopleDataContext(_connectionString))
            {
                context.People.Attach(person);
                context.Entry(person).State = EntityState.Modified;
                context.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            using (var context = new PeopleDataContext(_connectionString))
            {
                context.Database.ExecuteSqlCommand(
                    "DELETE FROM People WHERE Id = @id",
                    new SqlParameter("@id", id));
            }
        }

        public void Delete(List<int> ids)
        {
            using (var context = new PeopleDataContext(_connectionString))
            {
                var peopleToDelete = context.People.Where(p => ids.Contains(p.Id));
                context.People.RemoveRange(peopleToDelete);
                context.SaveChanges();
            }
        }

        public Person Get(int id)
        {
            using (var context = new PeopleDataContext(_connectionString))
            {
                return context.People.FirstOrDefault(p => p.Id == id);
            }
        }
    }
}
