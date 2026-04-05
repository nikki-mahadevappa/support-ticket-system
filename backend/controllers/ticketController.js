let tickets = [];

exports.createTicket = (req, res) => {
  const { subject, message, priority } = req.body;

  const newTicket = {
    id: Date.now().toString(),
    subject,
    message,
    priority,
    status: "NEW",
    createdAt: new Date()
  };

  tickets.push(newTicket);
  res.status(201).json(newTicket);
};

exports.getTickets = (req, res) => {
  res.json(tickets);
};

exports.updateTicket = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const ticket = tickets.find(t => t.id === id);

  if (!ticket) return res.status(404).json({ msg: "Not found" });

  ticket.status = status;
  res.json(ticket);
};