import { useEffect, useMemo, useState } from "react";
import Header from "./components/Header";
import StatsBox from "./components/StatsBox";
import AddForm from "./components/AddForm";
import ExpertsTable from "./components/ExpertsTable";
import EditModal from "./components/EditModal";
import Footer from "./components/Footer";

const STORAGE_KEY = "passport_records_v1";

function normalize(s) {
  return (s || "").toString().trim().toLowerCase();
}

function isValidPassportNumber(passport) {
  const p = passport.trim();
  return /^[A-Za-z0-9]{3,20}$/.test(p);
}

export default function App() {
  const [name, setName] = useState("");
  const [passport, setPassport] = useState("");
  const [query, setQuery] = useState("");
  const [records, setRecords] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPassport, setEditPassport] = useState("");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        queueMicrotask(() => {
          const parsed = JSON.parse(raw);
          setRecords(parsed);
        });
      }
    } catch (err) {
      console.error("Failed to load records:", err);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(records));
  }, [records]);

  const filtered = useMemo(() => {
    const q = normalize(query);
    if (!q) return records;
    return records.filter((r) => {
      return normalize(r.name).includes(q) || normalize(r.passport).includes(q);
    });
  }, [records, query]);

  const addRecord = (e) => {
    e.preventDefault();
    const n = name.trim();
    const p = passport.trim();

    if (!n) {
      alert("اكتب الاسم.");
      return;
    }
    if (!p) {
      alert("اكتب رقم الجواز.");
      return;
    }
    if (!isValidPassportNumber(p)) {
      alert("رقم الجواز لازم يكون حروف/أرقام فقط (3-20).");
      return;
    }

    const exists = records.some((r) => normalize(r.passport) === normalize(p));
    if (exists) {
      alert("رقم الجواز ده موجود بالفعل.");
      return;
    }

    const newItem = {
      id: crypto.randomUUID(),
      name: n,
      passport: p,
      createdAt: new Date().toISOString(),
    };

    setRecords((prev) => [newItem, ...prev]);
    setName("");
    setPassport("");
  };

  const startEdit = (record) => {
    setEditingId(record.id);
    setEditName(record.name);
    setEditPassport(record.passport);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const n = editName.trim();
    const p = editPassport.trim();

    if (!n) {
      alert("اكتب الاسم.");
      return;
    }
    if (!p) {
      alert("اكتب رقم الجواز.");
      return;
    }
    if (!isValidPassportNumber(p)) {
      alert("رقم الجواز لازم يكون حروف/أرقام فقط (3-20).");
      return;
    }

    const exists = records.some(
      (r) => r.id !== editingId && normalize(r.passport) === normalize(p),
    );
    if (exists) {
      alert("رقم الجواز ده موجود بالفعل.");
      return;
    }

    setRecords((prev) =>
      prev.map((r) =>
        r.id === editingId ? { ...r, name: n, passport: p } : r,
      ),
    );

    cancelEdit();
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditName("");
    setEditPassport("");
  };

  const removeRecord = (id) => {
    if (confirm("متأكد تحذف السجل ده؟")) {
      setRecords((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const clearAll = () => {
    if (confirm("متأكد تمسح كل البيانات؟")) {
      setRecords([]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
      <Header query={query} setQuery={setQuery} total={records.length} />
      <main className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-8 lg:py-12">
        <StatsBox total={records.length} filtered={filtered.length} />
        <div className="grid gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3 mb-6 sm:mb-8">
          <AddForm
            name={name}
            setName={setName}
            passport={passport}
            setPassport={setPassport}
            onAddRecord={addRecord}
            onClearAll={clearAll}
          />
        </div>
        <ExpertsTable
          filtered={filtered}
          total={records.length}
          onEdit={startEdit}
          onRemove={removeRecord}
        />
        <Footer />
      </main>
      <EditModal
        editingId={editingId}
        editName={editName}
        setEditName={setEditName}
        editPassport={editPassport}
        setEditPassport={setEditPassport}
        onSaveEdit={saveEdit}
        onCancelEdit={cancelEdit}
      />
    </div>
  );
}
