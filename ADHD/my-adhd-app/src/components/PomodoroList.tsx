import React, { useState, useEffect } from "react";

type Medication = string;

type Pomodoro = {
  minutes: number;
  seconds: number;
  running: boolean;
};

function PomodoroList() {
  const [medication, setMedication] = useState<Medication>("");
  const [medications, setMedications] = useState<Medication[]>([]);
  const [selected, setSelected] = useState<number>(-1);
  const [pomodoro, setPomodoro] = useState<Pomodoro>({
    minutes: 25,
    seconds: 0,
    running: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMedication(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (medication.trim()) {
      setMedications([...medications, medication]);
      setMedication("");
    }
  };

  const handleClick = (index: number) => {
    setSelected(selected === index ? -1 : index);
    setPomodoro({
      minutes: 25,
      seconds: 0,
      running: false,
    });
  };

  const handleYes = () => {
    setMedications(medications.filter((_, i) => i !== selected));
    setSelected(-1);
    setPomodoro({
      minutes: 25,
      seconds: 0,
      running: false,
    });
  };

  const handleStartStop = () => {
    setPomodoro({
      ...pomodoro,
      running: !pomodoro.running,
    });
  };

  const handleReset = () => {
    setPomodoro({
      minutes: 25,
      seconds: 0,
      running: false,
    });
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (pomodoro.running) {
      interval = setInterval(() => {
        if (pomodoro.seconds > 0) {
          setPomodoro({
            ...pomodoro,
            seconds: pomodoro.seconds - 1,
          });
        } else if (pomodoro.minutes > 0) {
          setPomodoro({
            ...pomodoro,
            minutes: pomodoro.minutes - 1,
            seconds: 59,
          });
        } else {
          setPomodoro({
            ...pomodoro,
            running: false,
          });
          alert("Time's up!");
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [pomodoro]);

  return (
    <div className="pomodoro-list">
      <h1>Tasks</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={medication}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {medications.map((med, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{ color: selected === index ? "purple" : "black" }}
          >
            {med}
          </div>
        ))}
      </ul>
      {selected !== -1 && (
        <div className="details">
          <p>Ready to try to finish the {medications[selected]} task? :)</p>
          <div className="timer">
            <p>{`${pomodoro.minutes
              .toString()
              .padStart(2, "0")}:${pomodoro.seconds
              .toString()
              .padStart(2, "0")}`}min</p>
            <button onClick={handleStartStop}>
              {pomodoro.running ? "Stop" : "Start"}
            </button>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default PomodoroList;