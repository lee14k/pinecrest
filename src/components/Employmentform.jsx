import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Employmentform() {
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName: event.target["first-name"].value,
      lastName: event.target["last-name"].value,
      email: event.target.email.value,
      phoneNumber: event.target["phone-number"].value,
      workHistories: workHistories,
      driversLicense: event.target["drivers-license"].checked,
      over18: event.target["over-18"].checked,
      shiftPreference: event.target["shift-preference"].value,
    };
    const handleWorkHistoryChange = (index, field, value) => {
      const updatedWorkHistories = [...workHistories];
      updatedWorkHistories[index] = {
        ...updatedWorkHistories[index],
        [field]: value,
      };
      setWorkHistories(updatedWorkHistories);
    };

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
                setIsModalOpen(true);

        // Handle success - show a message to the user, clear the form, etc.
        console.log("Form submitted successfully");
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("There was an error submitting the form:", error);
    }
  };
  const [agreed, setAgreed] = useState(false);

  const [workHistories, setWorkHistories] = useState([
    { company: "", position: "", startDate: "", endDate: "", jobDuties: "", currentlyEmployed: false },
  ]);

  const handleWorkHistoryChange = (index, field, value) => {
    const updatedWorkHistories = [...workHistories];
    updatedWorkHistories[index] = {
      ...updatedWorkHistories[index],
      [field]: value,
    };
    setWorkHistories(updatedWorkHistories);
  };

  const addWorkHistory = () => {
    setWorkHistories([
      ...workHistories,
      { company: "", position: "", startDate: "", endDate: "", jobDuties: "", currentlyEmployed: false },
    ]);
  };
    const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="rounded-md bg-emerald-600 px-6 py-3 text-4xl font-semibold text-white shadow-sm">
          Looking for a caregiver career?
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        method="POST"
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <input type="hidden" name="formType" value="employment" />
            </div>
          </div>
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2"></div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="sm:col-span-2">
              <h3 className="text-lg font-semibold leading-6 text-gray-900 mb-2">
                Work History
              </h3>

              
    {workHistories.map((history, index) => (
      <div key={index} className="mb-4">
        {/* Company Name Field */}
        <input
          type="text"
          name={`company-${index}`}
          id={`company-${index}`}
          placeholder="Company name"
          value={history.company}
          onChange={(e) => handleWorkHistoryChange(index, "company", e.target.value)}
          className="block w-full ..."
        />
        {/* Position Field */}
        <input
          type="text"
          name={`position-${index}`}
          id={`position-${index}`}
          placeholder="Position"
          value={history.position}
          onChange={(e) => handleWorkHistoryChange(index, "position", e.target.value)}
          className="block w-full ..."
        />
        {/* Start Date Field */}
        <input
          type="text"
          name={`startDate-${index}`}
          id={`startDate-${index}`}
          placeholder="Start Date"
          value={history.startDate}
          onChange={(e) => handleWorkHistoryChange(index, "startDate", e.target.value)}
          className="block w-full ..."
        />
        {/* End Date Field */}
        <input
          type="text"
          name={`endDate-${index}`}
          id={`endDate-${index}`}
          placeholder="End Date"
          value={history.endDate}
          onChange={(e) => handleWorkHistoryChange(index, "endDate", e.target.value)}
          className="block w-full ..."
        />
        {/* Job Duties Field */}
        <input
          type="text"
          name={`jobDuties-${index}`}
          id={`jobDuties-${index}`}
          placeholder="Job Duties"
          value={history.jobDuties}
          onChange={(e) => handleWorkHistoryChange(index, "jobDuties", e.target.value)}
          className="block w-full ..."
        />
        {/* Currently Employed Checkbox */}
        <label htmlFor={`currently-employed-${index}`}>
          Currently employed
        </label>
        <input
          type="checkbox"
          name={`currently-employed-${index}`}
          id={`currently-employed-${index}`}
          checked={history.currentlyEmployed}
          onChange={(e) => handleWorkHistoryChange(index, "currentlyEmployed", e.target.checked)}
        />
      </div>
    ))}

    <button onClick={addWorkHistory}>Add another work history</button>
            </div>
          </div>
          <div className="flex items-center sm:col-span-2">
            <input
              id="drivers-license"
              name="drivers-license"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label
              htmlFor="drivers-license"
              className="ml-3 block text-sm font-medium text-gray-900"
            >
              I have a driver's license.
            </label>
          </div>
          <div className="flex items-center sm:col-span-2">
            <input
              id="over-18"
              name="over-18"
              type="checkbox"
              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
            />
            <label
              htmlFor="over-18"
              className="ml-3 block text-sm font-medium text-gray-900"
            >
              I am over 18 years old.
            </label>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="shift-preference"
              className="block text-sm font-semibold leading-6 text-gray-900"
            >
              Shift Preference
            </label>
            <div className="mt-2.5">
              <select
                id="shift-preference"
                name="shift-preference"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              >
                <option value="1st">1st Shift</option>
                <option value="2nd">2nd Shift</option>
                <option value="3rd">3rd Shift</option>
              </select>
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? "bg-indigo-600" : "bg-gray-200",
                  "flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? "translate-x-3.5" : "translate-x-0",
                    "h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out"
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{" "}
              <a href="/Privacy" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
              {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
          <div className="modal-content bg-white p-4 rounded-lg shadow-lg z-50">
            <p className="text-lg font-semibold text-green-600">Submission Successful!</p>
            <p>Your submission was successful. Thank you!</p>
            <button
              onClick={closeModal}
              className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
      </form>
    </div>
  );
}
