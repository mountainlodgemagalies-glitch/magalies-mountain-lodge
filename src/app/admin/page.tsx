import { CalendarDays, CreditCard, Users, MessageSquare, TrendingUp, DollarSign } from "lucide-react";

const STATS = [
  { label: "Total Reservations", value: "127", change: "+12%", icon: <CalendarDays className="w-5 h-5" />, color: "bg-blue-500" },
  { label: "Revenue This Month", value: "R 285,400", change: "+8%", icon: <DollarSign className="w-5 h-5" />, color: "bg-green-500" },
  { label: "Active Guests", value: "24", change: "", icon: <Users className="w-5 h-5" />, color: "bg-purple-500" },
  { label: "Unread Messages", value: "7", change: "", icon: <MessageSquare className="w-5 h-5" />, color: "bg-orange-500" },
];

const RECENT_BOOKINGS = [
  { guest: "Sarah & David M.", room: "Luxury Mountain Suite", dates: "Jul 18 - Jul 20", status: "confirmed", amount: "R 4,900" },
  { guest: "Michelle van der Berg", room: "Executive Garden Room", dates: "Jul 22 - Jul 25", status: "pending", amount: "R 5,550" },
  { guest: "James & Anna K.", room: "Luxury Mountain Suite", dates: "Jul 25 - Jul 27", status: "confirmed", amount: "R 4,900" },
  { guest: "Thabo Molefe", room: "Classic Mountain Room", dates: "Aug 1 - Aug 3", status: "confirmed", amount: "R 2,900" },
  { guest: "Lisa Pretorius", room: "Executive Garden Room", dates: "Aug 5 - Aug 8", status: "pending", amount: "R 5,550" },
];

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back. Here&apos;s what&apos;s happening at the lodge.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {STATS.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg border border-border p-6">
            <div className="flex items-center justify-between mb-4">
              <div className={`${stat.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>
                {stat.icon}
              </div>
              {stat.change && (
                <span className="text-xs font-semibold text-green-600 flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" /> {stat.change}
                </span>
              )}
            </div>
            <p className="text-2xl font-bold text-foreground">{stat.value}</p>
            <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div className="bg-white rounded-lg border border-border">
        <div className="p-6 border-b border-border">
          <h2 className="text-lg font-bold text-foreground">Recent Reservations</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider p-4">Guest</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider p-4">Room</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider p-4">Dates</th>
                <th className="text-left text-xs font-semibold text-muted-foreground uppercase tracking-wider p-4">Status</th>
                <th className="text-right text-xs font-semibold text-muted-foreground uppercase tracking-wider p-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {RECENT_BOOKINGS.map((booking, i) => (
                <tr key={i} className="border-b border-border last:border-0 hover:bg-stone-50 transition-colors">
                  <td className="p-4 font-medium text-foreground">{booking.guest}</td>
                  <td className="p-4 text-muted-foreground text-sm">{booking.room}</td>
                  <td className="p-4 text-muted-foreground text-sm">{booking.dates}</td>
                  <td className="p-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      booking.status === "confirmed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="p-4 text-right font-semibold text-foreground">{booking.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
