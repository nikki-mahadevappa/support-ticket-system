import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tickets, setTickets] = useState([]);
  const [form, setForm] = useState({
    subject: "",
    message: "",
    priority: "Low"
  });

  const fetchTickets = async () => {
    const res = await axios.get("http://localhost:5000/api/tickets");
    setTickets(res.data);
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/tickets", form);
    fetchTickets();
  };

  const updateStatus = async (id, status) => {
    await axios.patch(`http://localhost:5000/api/tickets/${id}`, { status });
    fetchTickets();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Support Ticket System 🎫</h1>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Subject"
          onChange={(e) =>
            setForm({ ...form, subject: e.target.value })
          }
        />

        <br /><br />

        <textarea
          placeholder="Message"
          onChange={(e) =>
            setForm({ ...form, message: e.target.value })
          }
        />

        <br /><br />

        <select
          onChange={(e) =>
            setForm({ ...form, priority: e.target.value })
          }
        >
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <br /><br />

        <button type="submit">Create Ticket</button>
      </form>

      <h2>Tickets</h2>

      {tickets.length === 0 ? (
        <p>No tickets yet</p>
      ) : (
        tickets.map((ticket) => (
          <div key={ticket.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
            <h3>{ticket.subject}</h3>
            <p>{ticket.message}</p>
            <p>{ticket.priority} | {ticket.status}</p>

            <button onClick={() => updateStatus(ticket.id, "INVESTIGATING")}>
              Investigate
            </button>

            <button onClick={() => updateStatus(ticket.id, "RESOLVED")}>
              Resolve
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;